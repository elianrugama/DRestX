from django.urls import path, include
from . import views
from .views import TaskViewSet

from rest_framework import routers
from rest_framework.documentation import include_docs_urls

routers = routers.DefaultRouter()
routers.register('tasks', TaskViewSet)

#cargar react
from django.views.generic import TemplateView

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('api/', include(routers.urls)),
    
    
    path('api/docs/', include_docs_urls(title='Task API')),
    
    path('' , TemplateView.as_view(template_name='index.html'), name='home'),
    path('task/' , TemplateView.as_view(template_name='index.html'), name='home'),
    path('tasks' , TemplateView.as_view(template_name='index.html'), name='home'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)