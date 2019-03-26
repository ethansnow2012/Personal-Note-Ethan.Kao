### Text: Two Line
```
.text-twoLine{
	color: #535353;
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
  /*position:relative;*/
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
