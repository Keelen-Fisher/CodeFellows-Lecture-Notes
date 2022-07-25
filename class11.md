# Audio, Video, Images

## Video and Audio Content

- Web developers have wanted to use video and audio on the Web for a long time, ever since the early 2000's when we started to have bandwidth fast enough to support any kind of video. We did not have the same technology as now, back then HTML did not have the ability to embed video and audio on the Web. Flash and later Silverlight (which both barely exist) became popular for handling such content.

- The use of src attributes in the video element is for a containment of a path to the video that you want to embed. Similar to img element.

- The use of controls attributes is to include the browser's own control interface, or build your interface using the appropriate JS API. The interface must include a way to stop and start the media and also adjust the volume.

- Fallback content -  This will be displayed if the browser accessing the page doesn't support the video element, allowing us to provide a fallback for older browsers. This can be anything you like.

### Keelen Fisher Presents: The Advantures of Audio and Video

>> Video was just a sailor, looking for an opportunity of a lifetime. He search for years, 22 to be exact, to find the lost treasure known as ***The Element***. The Element you see, has powers that exceeds beyond the scope of the world of the Web globe. It is even said!! That this treasure can create a bridge between their world, and the world of their creators, otherwise known as ***The Humans***. Video was getting restless and losing his patience. He could not beleive that it would take so long to find this treasure. On his boat's last legs, he decides to resort to a nearby island and live his last days in solitude, as punishment for never being able to fulfill his promise. Litte did he know, this very island was actually home of the lost treasure. As he sailed near the island, he started to hear something. To his suprise, he heard the words of the treasure: "Whomever may hear this, know that you are destined to align with me and reach past the barriers of this world and to another". Video quickly jumped out of the ship, and despite being exhausted, swam the rest of the way over to the island. Reaching the shore, he ran his heart out to the the voice. As it grew louder and louder, he finally reached the treasure. Filled with joy, Video calls on the treasure: "The Element! I have found you!!" The treasure laughs as he responds: "Of course you found me, it was meant to be after all. It seems that you forgot my name as well". With confusion, Video replies: "I don't understand, are you?" "Audio, is my name. It's nice to meet you after all this time, old friend. I am your voice, and you are my vision. We are one in the same, yet you are the one who has searched for me all this time. You must remember who you are. You too have the power to venture to the world beyond. From here on out, you will be the window, and I will be the sound."

## A Complete Guide to Grid

- The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout rows, and columns at the same time.

- A grid **container** is the direct parent to all the grid items, placed in columns and rows.

- A grid **line** contain dividing lines that make up the structure of the grid. These can be either vertical or horizonal lines and reside on either side of the row or column.

- A grid **item** are the children and by default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

## Responsive Images

- Responsive image technologies were implemented recently to solve the problems by letting you offer the browser several image files, either all showing the same thing but containing different numbers of pixels (resolution switching), or different images suitable for different space allocations (art direction).

- The standard img element traditionally only lets you point the browser to a single source file:

- Example![img](Images/img%20element%20resolution%20switching%20example.png)

- The srcset and sizes attributes look complicated, but they're not too hard to understand if you format them as shown above, with a different part of the attribute value on each line. Each value contains a comma-separated list, and each part of those lists is made up of three sub-parts.

- srcset defines the set of images we will allow the browser to choose between, and what size each image is. Each set of image information is separated from the previous one by a comma.

## Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
