using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ImageStoreApi.Models
{

    public class Image
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string CreatorUserId { get; set; }

        public string CreatorName { get; set; }

        public DateTime CreatedOn { get; set; }

        public string ImageDescription { get; set; }

        public string FileName { get; set; }

        public string ContentType { get; set; }

        public ObjectId ImageId { get; set; }

        public List<Comment> Comments { get; set; }

    }
}