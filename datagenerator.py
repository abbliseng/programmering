#Humidity (0-100), #Temp (-10, 46) #Room
# Types of rooms => Greenhouse, Livingroom, Freezer, Kitchen
import random

nDataPoint = 20
data = []
minTemp = -10
maxTemp = 46
minHum = 0
maxHum = 100


humidity = 0
temperature = 0

# while len(data) < nDataPoint:
#     humidity = random.randint( minHum, maxHum )
#     temperature = random.randint( minTemp, maxTemp )
#     if (temperature < 2 and humidity < 50):
#         data.append([humidity, temperature, "Freezer"])
#     elif(temperature > 15 and temperature < 28 and humidity < 60):
#         data.append([humidity,temperature, "Livingroom"])
#     elif(temperature > 18 and temperature < 34 and humidity > 20):
#         data.append([humidity,temperature,"Kitchen"])
#     elif(temperature > 27 and humidity > 75):
#         data.append([humidity,temperature,"Greenhouse"])

while len(data) < nDataPoint:
    data.append([random.randint(0,25),random.randint(-10,0),"Freezer"])
    data.append([random.randint(20,60),random.randint(18,28),"Livingroom"])
    data.append([random.randint(35,75),random.randint(23,32),"Kitchen"])
    data.append([random.randint(55,100),random.randint(20,48),"Greenhouse"])

print(data)
# for p in data:
#     print(p)