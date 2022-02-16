This is a project designed as a template for any brand to advertise their products and recieve feedback.

I spent the entirety of today working on this project and in the end had to scrap it all because something went wrong somewhere. I still don't know what it was. This has been a very sad commit.

I just did it again today. I think the issue was just that I was trying to do stuff that doesn't work with dependencies that are as old as these. This is an even sadder commit because I thought like 9 times 'oh, that literally has to be the error!' only for absolutely nothing to change at all. I just have to rewrite the entire postDish action creator and it's implementation in NewDish. For some reason there was one instance where I didn't just get a 500 error, but all it posted was a single property from an object I was trying to send. I figured out why it would do that, fixed it so it wouldn't, and what do you know, I destroyed everything.
