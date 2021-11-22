$('div.publication').hover(
    function(inEvent){
        var thisThumbnailPreHover=$(this).find('.project-thumbnail.pre-hover');
        if (thisThumbnailPreHover.length != 0) {
            var thisThumbnailPostHover=$(this).find('.project-thumbnail.post-hover');
            // Make sure the alternative exists
            if (thisThumbnailPostHover.length != 0) {
                $(thisThumbnailPostHover[0]).show();
                $(thisThumbnailPreHover[0]).fadeOut(function(){$(thisThumbnailPreHover[0]).hide();});
            }
        }
    },
    function(outEvent){
        var thisThumbnailPreHover=$(this).find('.project-thumbnail.pre-hover');
        if (thisThumbnailPreHover.length != 0) {
            var thisThumbnailPostHover=$(this).find('.project-thumbnail.post-hover');
            // Make sure the alternative exists
            if (thisThumbnailPostHover.length != 0) {
                $(thisThumbnailPreHover[0]).fadeIn(function(){$(thisThumbnailPostHover[0]).hide();});
            }
        }
    });