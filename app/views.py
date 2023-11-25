from django.shortcuts import render
from gradio_client import Client

# Create your views here.


def index(request):
    data = []
    description = ""

    if request.method == "POST":
        description = request.POST.get('description')
        amount = 10

        client = Client(
            "https://yotakey-mammals-search.hf.space/--replicas/66lqq/")
        result = client.predict(
            description,
            amount,
            api_name="/predict"
        )

        data = result.split(",\n")

    return render(request, "app/index.html", context={"datas": data, "description": description})
