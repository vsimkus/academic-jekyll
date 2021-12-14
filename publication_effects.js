$('div.publication').hover(
    function(inEvent){
        var thisThumbnailPreHover=$(this).find('.project-thumbnail.pre-hover');
        if (thisThumbnailPreHover.length != 0) {
            var thisThumbnailPostHover=$(this).find('.project-thumbnail.post-hover');
            // Make sure the alternative exists
            if (thisThumbnailPostHover.length != 0) {
                $(thisThumbnailPostHover[0]).show();
                $(thisThumbnailPreHover[0]).stop().fadeOut(function(){$(thisThumbnailPreHover[0]).hide();});
            }
        }
    },
    function(outEvent){
        var thisThumbnailPreHover=$(this).find('.project-thumbnail.pre-hover');
        if (thisThumbnailPreHover.length != 0) {
            var thisThumbnailPostHover=$(this).find('.project-thumbnail.post-hover');
            // Make sure the alternative exists
            if (thisThumbnailPostHover.length != 0) {
                $(thisThumbnailPreHover[0]).stop().fadeIn(function(){$(thisThumbnailPostHover[0]).hide();});
            }
        }
    });

$('button.copy-btn').click(function(){
    var parent = $(this).parent();
    var modal = $(parent).parent();
    var bibTxt = $(modal).find('.bib-text');
    if (bibTxt.length != 0) {
        var bib = $(bibTxt[0]).text().trim();

        navigator.clipboard.writeText(bib);

        // Show success alert
        $(parent).prepend('<div class="alert alert-success" role="alert">Successfully copied to clipboard!</div>');
        var alert = $(parent).find('.alert');
        // Remove after 3s
        setTimeout(function() {
            alert.remove();
        }, 3000);
    }
});