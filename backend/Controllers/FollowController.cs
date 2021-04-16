// To be created when implementing user profiles, follows, or other

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using ImageStoreApi.Models;
using ImageStoreApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Web.Resource;
using MongoDB.Driver;

namespace ImageStoreApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FollowController : ControllerBase
    {

        private readonly ILogger<FollowController> _logger;
        private readonly IUserService _userService;

        public FollowController(ILogger<FollowController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        // Endpoint to follow a user
        [Authorize]
        [HttpGet]
        public IActionResult Get(string userId)
        {
            _userService.FollowUser(User.FindFirstValue(ClaimTypes.NameIdentifier), userId);
            return Content("Sucessful Follow");
        }

        [Authorize]
        [Route("/[controller]/followerlist")]
        [HttpGet]
        public ActionResult<List<User>> FollowerListGet(string userId)
        {

            return _userService.FollowerList(User.FindFirstValue(ClaimTypes.NameIdentifier), userId);
        }


        [Authorize]
        [Route("/[controller]/followedlist")]
        [HttpGet]
        public ActionResult<List<User>> FollowedListGet(string userId)
        {

            return _userService.FollowedList(User.FindFirstValue(ClaimTypes.NameIdentifier), userId);
        }


        // Endpoint to check if the logged in user is following a specific user
        [Authorize]
        [Route("/[controller]/isfollowed")]
        [HttpGet]
        public ActionResult<bool> isFollowed(string userId)
        {
            return _userService.IsFollowed(User.FindFirstValue(ClaimTypes.NameIdentifier), userId);
        }
    }
}
