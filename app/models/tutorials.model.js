module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        title: String,
        description: String,
        published: Boolean
    },
    {
        timestamp: true
    }
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    // {
    //     MOvie id:1
    //     MOvie-title:
    //     MOvie-desc: 
    //     return movie-details
    // }

    const Tutorial  = mongoose.model("tutorial", schema);
    return Tutorial
};