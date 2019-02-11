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
