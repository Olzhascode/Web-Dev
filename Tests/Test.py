class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

def validate_price(self, value):
    if value < 0:
        raise serializers.ValidationError('Price must be non-negative')
    return value



from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]



import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name='price', ...)
    max_price = django_filters.NumberFilter(field_name='price', ...)

    class Meta:
        model = Product
        fields = ['category']

class ProductListAPIView(generics.ListAPIView):
    ...
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter




class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

def perform_create(self, serializer):
    serializer.save(owner=self.request.user)


from rest_framework import viewsets, routers

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)



class TimeRangeSerializer(serializers.Serializer):
    start = serializers.IntegerField()
    end = serializers.IntegerField()

def validate(self, attrs):
    if attrs['start'] >= attrs['end']:
        raise serializers.ValidationError('start must be before end')
    return attrs