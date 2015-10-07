# FAC website

+ Master is being used just for the README
+ Make small changes straight onto `dev`
+ If you are making big changes, first create a new branch and merge that into dev    
+ merge into gh-pages
+ compile harp on gh-pages
+ push

```
    git checkout gh-pages
    git pull
    git checkout dev
    git merge gh-pages
    < make some edits >
    git commit ...
    git push
    git checkout gh-pages
    git merge dev
    harp compile _harp .
    git push
```



