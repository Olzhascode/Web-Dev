from models import Airplane, Rocket


def main():
    transport = [
        Airplane("Boeing 747", 900, 10000),
        Rocket("Starship-X", 28000, "Mars")
    ]

    for unit in transport:
        print(unit)
        print(unit.move())

        if isinstance(unit, Rocket):
            print(unit.launch())

        print("\n")


if __name__ == "__main__":
    main()