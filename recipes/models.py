from django.db import models
from django.conf import settings
from core.models import Unit


class Ingredient(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nombre")
    description = models.TextField(verbose_name="Descripción", blank=True)

    def __str__(self) -> str:
        return "Ingrediente: {}".format(self.name)

    class Meta:
        verbose_name = "Ingrediente"
        verbose_name_plural = "Ingredientes"
        app_label = "recipes"


class IngredientServing(models.Model):
    quantity = models.PositiveSmallIntegerField(verbose_name="Cantidad de ingrediente")
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE, verbose_name="Unidad")
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, verbose_name="Ingrediente")
    description = models.TextField(verbose_name="Descripción", blank=True)

    def __str__(self) -> str:
        return "{}, {} {}".format(self.ingredient.name, self.quantity, self.unit)

    class Meta:
        verbose_name = "Porción de ingrediente"
        verbose_name_plural = "Porciones de ingrediente"
        app_label = "recipes"


class Recipe(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name="Creador")
    title = models.CharField(max_length=255, verbose_name="Título")
    portions = models.PositiveSmallIntegerField(verbose_name="Cantidad de porciones")
    ingredient_servings = models.ManyToManyField(IngredientServing, related_name="recipes", verbose_name="Ingredientes")

    @property
    def images(self):
        return RecipeImage.objects.filter(recipe=self)

    @property
    def primary_image(self):
        return RecipeImage.objects.filter(recipe=self, is_primary=True).first()

    def __str__(self) -> str:
        return "Receta: {} | Porciones: {}".format(self.title, self.portions)

    class Meta:
        verbose_name = "Receta"
        verbose_name_plural = "Recetas"
        app_label = "recipes"


def recipe_upload_path(instance, filename):

    # file will be uploaded to MEDIA_ROOT/user_<id>/recipe_<id>/<filename>
    return 'user_{0}/recipe_{2}/{1}'.format(instance.user.id, instance.recipe.id, filename)


class RecipeImage(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, verbose_name="Receta")
    image = models.ImageField(upload_to=recipe_upload_path, verbose_name="Imagen de muestra")
    is_primary = models.BooleanField(verbose_name="Es la imagen de presentación?")


class Step(models.Model):
    order = models.PositiveSmallIntegerField(verbose_name="Orden")
    title = models.CharField(max_length=255, verbose_name="Título")
    description = models.TextField(verbose_name="Descripción")
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, verbose_name="Receta")

    def __str__(self) -> str:
        return "{}. {}".format(self.order, self.title)

    class Meta:
        verbose_name = "Paso"
        verbose_name_plural = "Pasos"
        app_label = "recipes"


class Rating(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name="Dueño")
    score = models.PositiveSmallIntegerField(verbose_name="Puntaje")
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, verbose_name="Receta")

    def __str__(self) -> str:
        return str(self.score)

    class Meta:
        verbose_name = "Puntuación"
        verbose_name_plural = "Puntuaciones"
        app_label = "recipes"
