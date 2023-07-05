from django.urls import path
from app import views

urlpatterns = [
	path('', views.allMateriels, name='list'),
	path('add', views.addMateriel, name='add'),
	path('<num>/update', views.updateMateriel, name='update'),
	path('<num>/delete', views.deleteMateriel, name='delete')
]