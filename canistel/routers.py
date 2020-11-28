# Routers provide an easy way of automatically determining the URL conf.
from rest_framework import routers

from core.serializers import UnitViewSet, UserViewSet
from recipes.serializers import RatingViewSet, StepViewSet, RecipeViewSet, IngredientServingViewSet, IngredientViewSet

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"units", UnitViewSet)
router.register(r"ingredients", IngredientViewSet)
router.register(r"ingredient_servings", IngredientServingViewSet)
router.register(r"recipes", RecipeViewSet)
router.register(r"steps", StepViewSet)
router.register(r"ratings", RatingViewSet)
