//these functions modify a dictionary which should be hosted in core server
function createGroup(user_id, groupsJSON, top_tracks){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
	groupsJSON.push({key: genGroupCode(), value: [user_id, top_tracks]});
	return groupsJSON
}

function genGroupCode(){
	high = 9999
	low = 1111
	return Math.random() * (high - low) + low
}

function addUser(group_code, user_id, groupsJSON, top_tracks){
	groupsJSON.push({key:group_code, value:groupsJSON[group_code].push(user_id).push(top_tracks)})
	return groupsJSON
}

function getGroup(group_code, groupsJSON){
	if(group_code in groupsJSON){
		return groupsJSON[group_code]
	}
	return "Invalid Group Code"
}
