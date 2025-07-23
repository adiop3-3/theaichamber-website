{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "**/*.log",
      "**/README.md"
    ],
    "rewrites": [
      {
        "source": "/analytics",
        "destination": "/analytics.html"
      },
      {
        "source": "/ai-assistant", 
        "destination": "/ai-assistant.html"
      },
      {
        "source": "/all-posts",
        "destination": "/all-posts.html"
      },
      {
        "source": "/post",
        "destination": "/post.html"
      },
      {
        "source": "/terms",
        "destination": "/terms.html"
      },
      {
        "source": "/privacy-policy",
        "destination": "/privacy-policy.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(html)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=3600"
          }
        ]
      }
    ],
    "cleanUrls": true,
    "trailingSlash": false
  }
}