export default function validateAuth(values) {
    let errors = {};
    // customer name
    if(!values.customerName) {
        errors.customerName = 'Name Required'
    } else if (values.customerName.length < 2) {
        errors.customerName = "Name shouldn't be  less than 2 letters"
    }
    // year of graduation
    if(!values.dateGraduated) {
        errors.dateGraduated = 'Date of Graduation Required'
        // TODO: double check this 
    } else if (Number.isNaN(values.dateGraduated)) {
        errors.dateGraduated = "Date of Graduation must be a number"
    }
    // pros
    if(!values.pros) {
        errors.pros = 'Pros Required'
    } 
    // cons
    if(!values.pros) {
        errors.cons = 'Cons Required'
    } 
    // review
    if(!values.review) {
        errors.review = 'Review section must be filled'
    } 
    // review
    if(!values.customerLinkedin) {
        errors.review = 'Linkedin link is Required'
    } 
    // TODO: validate linkedin link later. Use regex or similar
    return errors;
}