Build Journal:

1. This app will be like a video message for someone's birthday or wedding. It'll have a bunch of friends portriants with their message onHover. 
v.1 will have the ability to add a picture, and quote
v.2 will have the ability to ability to record audio messages onclick 
v.3 will have the ability to store photos in DB somehow along with audio vs just an image link 
v.4 will have log-ins so that other people can use this app. 
    ie. someone will log-in, make a message board, send it to people to populate with the write-only log-ins. then they sill send it to the receppient with the log-n and full control.  

2. first step is to make a simple react app like the recipe app...audio

3. Step 1; throw data on page.

4. Rememeber make it mobile first 

5. made the skeleton with state. 

6. add form then add functionality, will need to decide on how to store data. 
   will eventually need it to persist. and not just be hard-coded. 

7. note about for which is htmlFor in JSX (it basically lets you click on the whole form to access the input field )

   https://stackoverflow.com/questions/18432376/what-does-for-attribute-do-in-html-label-tag
   The <label> tag allows you to click on the label, and it will be treated like clicking on the associated input element. There are two ways to create this association:

    First, you can wrap the label element around the input element:

    <label>Input here:
        <input type='text' name='theinput' id='theinput'>
    </label>
    The other way is to use the for attribute, giving it the ID of the associated input:

    <label for="theinput">Input here:</label>
    <input type='text' name='whatever' id='theinput'>
    This is especially useful for use with checkboxes and buttons, since it means you can check the box by clicking on the associated text instead of having to hit the box itself.