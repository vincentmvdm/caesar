//kmeans implemented with javascript
//data needs to come in in this form:
var data = {};
data["track1"] = [1,2,3,4,5];
data["track2"] = [2,3,4,5,6];
data["track3"] = [1,2,3,4,6];
data["track4"] = [2,3,5,6,7];

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
    for(var i in data)
    {
        //this is the list attached to that song
        var point = data[i];
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
function makeAssignments() {
    var assignments = [];
    for(var i in data)
    {
        var point = data[i];
        var distances = [];
        for (var j in centers)
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
            distances[j] = Math.sqrt(sum);
        }
        assignments[i] = distances.indexOf(Math.min.apply(null, distances));
    }
    return assignments;
}

//Recalculate means
function moveMeans() {
    var assignments = makeAssignments();

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

//set up function
function setup() {
    //get the canvas
    //get the context

    console.log("getting extremes");
    dataExtremes = getDataExtremes(data);
    console.log(dataExtremes);
    console.log("getting ranges");
    dataRange = getDataRanges(dataExtremes);
    console.log(dataRange);
    console.log("finding initial centers");
    centers = initMeans(2);
    console.log(centers);

    console.log("making assignments");
    var assignments = makeAssignments();
    console.log("these are the assignments");
    console.log(assignments)
    //try to find the largest cluster which is the playlist you return to the user
    clusters = {};
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
    console.log(clusters);

    //return the largest one
    var longest = 0;
    var playlist = null;
    for(var c in clusters){
      if(clusters[c].length > longest)
      {
        longest = clusters[c].length;
        playlist = clusters[c];
      }
    }
    //Final playlist outputted
    console.log(playlist);
}

//checks to see if it's stopped
/*function run() {
    var moved = moveMeans();
    if(moved)
    {
        setTimeout(run, drawDelay);
    }
}*/
setup();
