//kmeans implemented with javascript
//data needs to come in in this form:
//var data = ;
/*data["track1"] = [1,2,3,4,5];
data["track2"] = [2,3,4,5,6];
data["track3"] = [1,2,3,4,6];
data["track4"] = [2,3,5,6,7];*/

//figures out the ranges in values for each features
function getDataRanges(extremes) {
    var ranges = [];
    for (var dimension in extremes)
    {
        ranges[dimension] = extremes[dimension].max - extremes[dimension].min;
    }
    return ranges;
}

//figures out the extreme data points
function getDataExtremes(data) {
    var extremes = [];
    //each dictionary in data
    for(var i in data)
    {
        //this is the list attached to that song
        var point = data[i]["value"];
        for(var dimension in point)
        {
            if( ! extremes[dimension])
            {
                //could potentially change this...
                extremes[dimension] = {min:150, max:-150};
            }

            if (point[dimension] < extremes[dimension].min)
            {
                extremes[dimension].min = point[dimension];
            }
            if (point[dimension] > extremes[dimension].max)
            {
                extremes[dimension].max = point[dimension];
            }
        }
    }
    return extremes;
}

//Initialize the centers
function initMeans(k) {
    var centers = [];
    if(!k)
    {
        k = 2;
    }

    while(k --)
    {
        var center = [];
        for (var dimension in dataExtremes)
        {
            //random initialization
            center[dimension] = dataExtremes[dimension].min + Math.random()*dataRange[dimension];
        }
        //add to the centers, initial centers list.
        centers.push(center);
    }
    return centers;
}

//Assign clusters
function makeAssignments(data, centers) {
    var assignments = [];
    //each dictionary
    for(var i in data)
    {
        //this is the dictionary
        var dat = data[i];
        var point = dat["value"];
        //var distances = [];
        var dist = 1000000;
        var idx = 0;
        for (var j = 0; j < centers.length; j++)
        {
            //finding the distance from this point to the center
            var center = centers[j];
            var sum = 0;
            for(var dimension in point)
            {
                var difference = point[dimension] - center[dimension];
                difference *= difference;
                sum += difference;
            }
            sum = Math.sqrt(sum);
            if(sum < dist){
              dist = sum;
              idx = j;
            }
        }
        assignments.push([idx, dat["key"]]);
    }
    console.log(assignments);
    return assignments;
}

//Recalculate means
function moveMeans(assignments, data, centers) {

    var sums = Array(centers.length);
    var counts = Array(centers.length);
    var moved = false;

    for(var j in centers)
    {
        counts[j] = 0;
        sums[j] = Array(centers[j].length);
        for (var dimension in centers[j])
        {
            sums[j][dimension] = 0;
        }
    }
    for (var point_index in assignments)
    {
    var mean_index = assignments[point_index];
    var point = data[point_index];
    var mean = centers[mean_index];

    counts[mean_index]++;

        for(var dimension in mean)
        {
            sums[mean_index][dimension] += point[dimension];
        }
    }
    for (var mean_index in sums)
    {
        if(0 === counts[mean_index])
        {
            sums[mean_index] = centers[mean_index];

            for(var dimension in dataExtremes)
            {
                sums[mean_index][dimension] = dataExtremes[dimension].min + (Math.random() * dataRange[dimension]);
            }
            continue;
        }
        for(var dimension in sums[mean_index])
        {
            sums[mean_index][dimension] /= counts[mean_index];
        }
    }
    if(centers.toString() !== sums.toString())
    {
        moved = true;
    }
    centers = sums;

    return moved;
}
var exports = module.exports = {};
//set up function
exports.setup = function(data) {
    //get the canvas
    //get the context
    console.log("getting extremes");
    dataExtremes = getDataExtremes(data);
    console.log(dataExtremes);
    console.log("getting ranges");
    dataRange = getDataRanges(dataExtremes);
    console.log(dataRange);
    console.log("finding initial centers");
    centers = initMeans(4);
    console.log(centers);

    console.log("making assignments");
    var iterations = 20;
    var assignments = makeAssignments(data, centers);
    console.log(assignments);
    while(iterations >= 0){
      assignments = makeAssignments(data, centers);
      console.log("moving means");
      moveMeans(assignments, data, centers);
      iterations -= 1;
    }
    console.log("Assignments", assignments);
    var cuck = {};
    for(i = 0; i < assignments.length; i++){
      var tup = assignments[i];
      if(tup[0] in cuck){
        cuck[tup[0]] += 1;
      }
      else{
        cuck[tup[0]] = 1;
      }
    }
    var pooop = Object.keys(cuck).reduce(function(a,b){return cuck[a]>cuck[b] ? a : b});
    console.log("max ele", pooop);
    console.log("cuck", cuck);
    var playlist = [];
    for(i = 0; i < assignments.length; i++){
      if (assignments[i][0] = pooop){
        playlist.push(assignments[i][1]);
      }
    }

    console.log("ready");
    //iterate over the assignments, get all the URIs for the k

    console.log(playlist);


    //try to find the largest cluster which is the playlist you return to the user
    /*clusters = {};
    for(var track in assignments)
    {
      var c = assignments[track];
      if(clusters[c] == null){
        clusters[c] = [];
        clusters[c].push(track);
      }
      else{
        clusters[c].push(track);
      }
    }
    console.log(clusters);*/

    //return the largest one
    /*var longest = 0;
    var playlist = null;
    for(var c in clusters){
      if(clusters[c].length > longest)
      {
        longest = clusters[c].length;
        playlist = clusters[c];
      }
    }
    //Final playlist outputted
    console.log(playlist);*/
}
