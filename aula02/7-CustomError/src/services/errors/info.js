const generateUserErrorInfo = (user) => {
  return `One or more properties were incomplete.
  List of required properties:
  * first_name: needs to be a String, received ${user.first_name}
  * last_name: needs to be a String, received ${user.last_name}
  * email: needs to be a String, received ${user.email}`
}

const generateUserErrorInfoType = (user) => {
  return `One or more properties were not valid.
  List of required properties:
  * first_name: needs to be a String, received ${typeof user.first_name}
  * last_name: needs to be a String, received ${typeof user.last_name}
  * email: needs to be a String, received ${typeof user.email}`
}

module.exports = {generateUserErrorInfo, generateUserErrorInfoType};