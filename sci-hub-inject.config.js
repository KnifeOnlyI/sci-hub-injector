const config = {
  'scihub-url': 'https://sci-hub.mksa.top',
  'icon': 'data:image/gif;base64,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'
}
