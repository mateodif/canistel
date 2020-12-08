from core.serializers import UnitSerializer, UserSerializer
from rest_framework import serializers, viewsets
from recipes.models import Ingredient, IngredientServing, Recipe, RecipeImage, Step, Rating


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["name", "description"]


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class IngredientServingSerializer(serializers.ModelSerializer):
    unit = UnitSerializer()
    ingredient = IngredientSerializer()

    class Meta:
        model = IngredientServing
        fields = ["quantity", "unit", "ingredient", "description"]


class IngredientServingViewSet(viewsets.ModelViewSet):
    queryset = IngredientServing.objects.all()
    serializer_class = IngredientServingSerializer


class RecipeSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    owner = UserSerializer()
    ingredient_servings = IngredientServingSerializer(many=True)

    class Meta:
        model = Recipe
        fields = ["id", "owner", "title", "portions", "ingredient_servings", "images"]


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = RecipeImage
        fields = ["recipe", "image", "is_primary"]


class RecipeImageViewSet(viewsets.ModelViewSet):
    queryset = RecipeImage.objects.all()
    serializer_class = RecipeImageSerializer


class StepSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Step
        fields = ["order", "title", "description", "recipe"]


class StepViewSet(viewsets.ModelViewSet):
    queryset = Step.objects.all()
    serializer_class = StepSerializer


class RatingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Rating
        fields = ["owner", "score", "recipe"]


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
