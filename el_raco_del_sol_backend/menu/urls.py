from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, DishViewSet, TeamMemberViewSet

router = DefaultRouter()
router.register(r"categories", CategoryViewSet)
router.register(r"dishes", DishViewSet)
router.register(r"team", TeamMemberViewSet)

urlpatterns = [ path("", include(router.urls)) ]
