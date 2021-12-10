import json
from pudge import hookar_herois, hookar_risadas

heroes = {}

hookar_herois(heroes)

for x in heroes.keys():
    print(f"== Parsing {x} heroes ==")
    for y in heroes[x]:
        print(f"Parsing {y}")
        hookar_risadas(heroes, x, y)


f = open("parse-test.json", "w")
f.write(json.dumps(heroes, indent=2))
f.close()
