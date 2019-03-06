export const ipv4DNSResolvers = {
  // @todo this is a lot of items to display in a single list, and each DC has ~8.
  // Probably will need a different UX here.
  newark: [
    '66.228.42.5',
    '96.126.106.5',
    '50.116.53.5',
    '50.116.58.5',
    '50.116.61.5',
    '50.116.62.5',
    '66.175.211.5'
  ],
  dallas: [
    '173.255.199.5',
    '66.228.53.5',
    '96.126.122.5',
    '96.126.124.5',
    '96.126.127.5',
    '198.58.107.5',
    '198.58.111.5',
    '23.239.24.5'
  ],
  fremont: [
    '173.230.145.5',
    '173.230.147.5',
    '173.230.155.5',
    '173.255.212.5',
    '173.255.219.5',
    '173.255.241.5',
    '173.255.243.5',
    '173.255.244.5'
  ],
  atlanta: [
    '173.230.129.5',
    '173.230.136.5',
    '173.230.140.5',
    '66.228.59.5',
    '66.228.62.5',
    '50.116.35.5',
    '50.116.41.5',
    '23.239.18.5'
  ],
  london: [
    '178.79.182.5',
    '176.58.107.5',
    '176.58.116.5',
    '176.58.121.5',
    '151.236.220.5',
    '212.71.252.5',
    '212.71.253.5'
  ],
  tokyo: [
    '106.187.90.5',
    '106.187.93.5',
    '106.187.94.5',
    '106.187.95.5',
    '106.186.116.5',
    '106.186.123.5',
    '106.186.124.5'
  ],
  'singapore': [
    '139.162.11.5',
    '139.162.13.5',
    '139.162.14.5',
    '139.162.15.5',
    '139.162.16.5',
    '139.162.21.5',
    '139.162.27.5'
  ],
  frankfurt: [
    '139.162.130.5',
    '139.162.131.5',
    '139.162.132.5',
    '139.162.133.5',
    '139.162.134.5',
    '139.162.135.5',
    '139.162.136.5',
    '139.162.137.5',
    '139.162.138.5',
    '139.162.139.5'
  ],
  shinagawa1: [
    '139.162.66.5',
    '139.162.67.5',
    '139.162.68.5',
    '139.162.69.5',
    '139.162.70.5',
    '139.162.71.5',
    '139.162.72.5',
    '139.162.73.5',
    '139.162.74.5',
    '139.162.75.5'
  ],
  toronto: [
    '172.105.0.5',
    '172.105.3.5',
    '172.105.4.5',
    '172.105.5.5',
    '172.105.6.5',
    '172.105.7.5',
    '172.105.8.5',
    '172.105.9.5',
    '172.105.10.5',
    '172.105.11.5'
  ]
};

export const ipv6DNSResolvers = [
  '2600:3c00::', // Dallas, TX
  '2600:3c01::', // Fremont, CA
  '2600:3c02::', // Atlanta, GA
  '2600:3c03::', // Newark, NJ
  '2a01:7e00::', // London, UK
  '2400:8900::', // Tokyo, JP
  '2400:8901::', // Singapore, SG
  '2a01:7e01::', // Frankfurt, DE
  '2400:8902::', // Shinagawa1, JP
  '2600:3C04::' // Toronto, CAN
];