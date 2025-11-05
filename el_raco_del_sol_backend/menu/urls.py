from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, DishViewSet, TeamMemberViewSet, GalleryImageViewSet

router = DefaultRouter()
router.register(r"categories", CategoryViewSet)
router.register(r"dishes", DishViewSet)
router.register(r"team", TeamMemberViewSet)
router.register("gallery", GalleryImageViewSet)

urlpatterns = [ path("", include(router.urls)) ]
