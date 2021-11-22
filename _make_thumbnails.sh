# From https://github.com/leonidk/new_website
mkdir -p tn/publications/images
mogrify -path tn/publications/images -thumbnail 160x160 publications/images/*.png
mogrify -path tn/publications/images -thumbnail 160x160 publications/images/*.jpg
mogrify -path tn/publications/images -thumbnail 160x160 publications/images/*.gif
