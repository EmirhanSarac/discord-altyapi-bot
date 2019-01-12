module.exports = member => {
    let username = member.user.username;
    member.send('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
