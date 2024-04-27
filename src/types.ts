// Define types for the Apha Vantage API
export interface Data {
    items: string;
    sentiment_score_definition: string;
    relevance_score_definition: string;
    feed: [
        {
            title: string;
            url: string;
            time_published: string;
            authors: string[];
            summary: string;
            source: string;
            category_within_source: string;
            source_domain: string;
            topics: [
                {
                    topic: string;
                    relevance_score: string;
                }
            ],
            overall_sentiment_score: number;
            overall_sentiment_label: string;
        }
    ]
}