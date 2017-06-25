var groupsJSON = require('./groups');

function createGroup(user_id){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
	groupsJSON.push({key: genGroupCode(), value: [user_id]});
}

function genGroupCode(){
	var high = 9999
	var low = 1111
	return Math.random() * (high - low) + low
}

function addUser(group_code, user_id){
	groupsJSON.push({key:group_code, value:groupsJSON[group_code].push(user_id)})
}

function getGroupUsers(group_code, user_id){
	if(group_code in groupsJSON){
		if user_id in groupsJSON[group_code]:
			return groupsJSON[group_code]
		else:
			return "You are not in this group"
	}
	return "Invalid Group Code"
}