export default {
    db:  {
        url: `postgres://${process.env.POSTGRES_USER || 'myhit'}:${process.env.POSTGRES_PASSWORD || 'myhit'}@${process.env.POSTGRES_HOST || 'localhost'}/${process.env.POSTGRES_DB || 'myhit'}`,
        dialect: 'postgres'
    },
};