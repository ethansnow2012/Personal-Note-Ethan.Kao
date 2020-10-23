### Text: Two Line
```
.text-twoLine{
	line-height: 1.4;/* not too crowded*/
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* number of lines to show */
	-webkit-box-orient: vertical;
}
```
Note: It seems like only viable pure css solution. This works on ie10+, chrome, firefox but I am not sure "webkit"
prefix is good for long term or should we just do it with Javascript.

### Three kinds of rendering procedure

1. JS / CSS > Style > Layout > Paint > Composite
2. JS / CSS > Style-----------> Paint > Composite
3. JS / CSS > Style--------------------> Composite

In other words, you can avoid Layout phase or Paint phase for better performance.
### 2-D center
```
      .center{
        position:absolute;
        top:50%;
        left:50%;
        background:green;
        width:100px;
        height:100px;
        transform: translate3d(-50px,-50px,0px);/* 50px here co-dep. with width&&height */
      }
```
```
.aa{
  width:100px;
  height:100px;
  background:grey;
  display:flex;
  justify-content: center;
  align-items: center;
}
.bb{
  width:50%;
  height:50%;
  background:red;
}
<div class="aa">
  <div class="bb"></div>
</div>
```

### multi-line overflow css
```
display: block;
    display: -webkit-box;
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.4;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    /* border-radius: 15px;
```
other
```
filter: drop-shadow(0px 1px 30px #fff);
```
```
RequestAnimationFrame 
```
```
image-rendering: -moz-crisp-edges;         /* Firefox */
image-rendering:   -o-crisp-edges;         /* Opera */
image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
image-rendering: crisp-edges;
-ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
```

https://www.youtube.com/watch?v=UQRSaG1hQ20


# Lottie 
https://www.youtube.com/watch?v=72qbebvwxnY
# Lottie animations to HTML
https://www.youtube.com/watch?v=xYQ-HdVfBSA

# Dealing with image blur
```
image-rendering: -moz-crisp-edges;         /* Firefox */
image-rendering:   -o-crisp-edges;         /* Opera */
image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
image-rendering: crisp-edges;
```
-ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */

# texture background
```
https://www.transparenttextures.com/
```
