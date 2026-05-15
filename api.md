# Document

Types:

- <code><a href="./src/resources/document.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/document.ts">DocumentGetResponse</a></code>
- <code><a href="./src/resources/document.ts">DocumentGetByPathResponse</a></code>

Methods:

- <code title="get /api/v1/site/pages">client.document.<a href="./src/resources/document.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="get /api/v1/md/{id}">client.document.<a href="./src/resources/document.ts">get</a>(id) -> DocumentGetResponse</code>
- <code title="get /api/v1/md/by-path/{path}">client.document.<a href="./src/resources/document.ts">getByPath</a>(path\_) -> DocumentGetByPathResponse</code>

# V1

## Analytics

Types:

- <code><a href="./src/resources/v1/analytics.ts">AnalyticsCreateEventResponse</a></code>

Methods:

- <code title="post /api/v1/analytics/events">client.v1.analytics.<a href="./src/resources/v1/analytics.ts">createEvent</a>({ ...params }) -> AnalyticsCreateEventResponse</code>
