
# CLIENT SIDE ISSUES ------------------------------------------------

<!-- 1. Server sends each object with _id, but how to use our own id from state reactjs. Becuase onSubmit DOM updates but doens't get the _id from database unless page refreshes.
I thought to use => let id = Math.floor(Math.random() * Math.floor(Number.MAX_VALUE));
But in this case mongodb doesn't delete user with _id that i created. (req.params.id);
At the momennt i get around by removing e.prevenDefault() from button so page refreshes and gets the _id from database. -->

<!-- 2.  IDK why but fetch return 2 empty [] before returning actual data from database. Is it something to do with react lifecycles or server ? -->

3. All the styles seen from Elements section on DOM. In development we want to hide them.
4. Chart library has some issues, check their updates on github



# BACKEND SIDE ISSUES ------------------------------------------------


