# Node-100-Logging-All-Things

For this project, my first task was to write my own middleware in order to log GET request client info to a csv file.
This information included the user-agent, the time of the request, the method used, resource, version, and status of the 
request.  

Now that this information was logged in an organized fashion in a local csv file, my next task was to respond to a second GET 
request with the goal of displaying the data in the csv file as a JSON object on the browser.  I did this by splitting the csv 
data by line ("\n"), so that I could then utilize a "for-loop" that would iterate through each line of data, and split the
array of strings by a common deliminator - a comma.  By separating the data by a comma, I was able to isolate each individual 
piece of data into its own sub-array.  At this point, I just created a json object and set the key value pairs accordingly, 
sent the object as a GET request response and called it a day!
