# Lunar Gala
This is the main website for Lunar Gala - a fashion show held annually at Carnegie Mellon.
It can be found at https://lunargala.org/


## How to write a blog post
- Create a new file under the _posts directory.
- The template allows for 3 images and 3 different sub sections, you can use less if desired
- Copy the template below into your newly created file
- Update the content
- Add any image files to main-content/blog-images/
- Make sure that image1, image2, image3 are set to the location of your image ("../../../main-content/blog-images/YOUR_IMAGE_NAME)
- Check that it works locally if you desire
- Submit pull request


## Quick Notes 
- There cannot be carriage returns in the content sections, if you want to add newlines they must be encoded as \n
- The name of the file must follow this format 2012-09-12-how-to-write-a-blog.md -- which is date-title



## Template 
\--- \
layout: post \
title:  Sample Blog Post \
date:   2015-11-17 16:16:01 -0600 \
categories: jekyll update \
image1: https://images.unsplash.com/photo-1491956142110-8a4226a12077?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d65bd7937511c934d4b450d31f2c1ec&auto=format&fit=crop&w=1350&q=80 \
image2: https://images.unsplash.com/photo-1457972703743-4a6585c42ed8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88f83e98e2cb51dfcf90091a833d61b5&auto=format&fit=crop&w=1350&q=80 \
image3: https://images.unsplash.com/photo-1457972851104-4fd469440bf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2996962c8db1ab54f6998cf640db8ec&auto=format&fit=crop&w=1350&q=80 \
subtitle1: Hello subtitle1 \
content1: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `bundle exec jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated. \
subtitle2: Hello subtitle2 \
content2: To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.md` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works. \
subtitle3: Hello subtitle3 \
content3: \
\- can \
\- also \
\- do \
\- this \
\- and put - in front of line \
\--- \

