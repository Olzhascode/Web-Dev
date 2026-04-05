from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Product
from api.serializers import SerializerProduct
from django.http import Http404

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serialized = SerializerProduct(products, many=True)
        return Response(serialized.data)

    def post(self, request):
        serialized = SerializerProduct(data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        return Response(serialized.data, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailAPIView(APIView):
    def get_object(self, product_id):
        try:
            return Product.objects.get(pk = product_id)
        except Product.DoesNotExist:
            raise Http404


    def get(self, request, product_id):
        product = self.get_object(product_id)
        serialized = SerializerProduct(product)
        return Response(serialized.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        serialized = SerializerProduct(instance=product, data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data)
        return Response(serialized.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
