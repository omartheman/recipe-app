# script to generate folders based on names in a list

import os

# update your path
path = "C:/Users/HP EliteBook 8470p/Downloads/recipeapp folders"

# update your list
lst = ["babaganoush", "broccoli soup", 'pozole']
for item in range(10):
    new_dir = str(item)
    print(new_dir)
    os.mkdir(new_dir)