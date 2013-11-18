using Newtonsoft.Json;

namespace AspNetStack.Models
{
    public class Phone
    {
        [JsonProperty("age")]
        public int Age { get; set; }
        [JsonProperty("carrier")]
        public string Carrier { get; set; }
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("imageUrl")]
        public string ImageUrl { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("snippet")]
        public string Snippet { get; set; }
    }
}