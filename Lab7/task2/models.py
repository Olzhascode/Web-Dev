class Vehicle:
    def __init__(self, model, speed, fuel):
        self.model = model
        self.speed = speed
        self.__fuel = fuel

    def move(self):
        return f"The {self.model} drives at {self.speed} km/h."

    def __str__(self):
        return f"Vehicle: {self.model} | Fuel: {self.__fuel}"


class Airplane(Vehicle):
    def __init__(self, model, speed, max_altitude):
        super().__init__(model, speed, "Kerosene")
        self.max_altitude = max_altitude

    def move(self):
        return f"The {self.model} flies at {self.speed} km/h at an altitude of {self.max_altitude}m."


class Rocket(Vehicle):
    def __init__(self, model, speed, destination):
        super().__init__(model, speed, "Rocket Fuel")
        self.destination = destination

    def launch(self):
        return f"The {self.model} is launching towards {self.destination}!"


class Student:
    def __init__(self, name, gpa, id):
        self.name = name
        self.gpa = gpa
        self.id = id
