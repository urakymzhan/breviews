For production, you should create a seperate config that extends and modifies the development version.

Development:
- fix footer position
- make header fixed (currenly works okay);
- use better Date library for showing review date.
- persist page position after handlesubmit refreshes it
- add favicon to index.html (currently not working, maybe use : https://www.npmjs.com/package/react-favicon )



DESIGN:

    ideally i want state to be:
    
    this.state = {
        data: {
            seytech: {
                data: data,
                reviewInput: '', 
                nameInput: '', 
                dataToPost: {} 
            },
            cybertek: {
                data: data,
                reviewInput: '', 
                nameInput: '', 
                dataToPost: {} 
            }
            ... more bootcamps
        }
    }
