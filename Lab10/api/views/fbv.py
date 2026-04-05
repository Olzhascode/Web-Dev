from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Product
from api.serializers import SerializerProduct


@api_view(['GET', 'POST'])
def product_list(request):
    if request == 'GET':
        products = Product.objects.all()
        serialized = SerializerProduct(products, many=True)
        return Response(serialized.data)

    if request == 'POST':
        serialized = SerializerProduct(data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        return Response(serialized.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, product_id):
    try:
        product = Product.objects.get(pk = product_id)
    except Product.DoesNotExist:
        Response(status = status.HTTP_404_NOT_FOUND)

    if request == 'GET':
        serialized = SerializerProduct(product)
        return Response(serialized.data)

    if request == 'PUT':
        serialized = SerializerProduct(product, data = request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data)
        return Response(serialized.data, status=status.HTTP_400_BAD_REQUEST)

    if request == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






