const query = `{
  orders(first:10){
    edges{
      node{
        lineItems(first:10){
          edges{
            node{
              product{
                id
                title
              }
              variant{
                id
                title
                sku
                
              }
              originalUnitPriceSet{
                presentmentMoney{
                  amount
                  
                  currencyCode
                }
              }
            }
          }
        }
      }
      
    }
    pageInfo{
      hasNextPage
      
      
    }
  }
}`
export default async function handler(req, res) {
  const result = await fetch('https://app4101.hieunguyen.dev/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        products{
          id
          name
          sku
        }
        orders{
          id
          product{
            name
            sku
          }
          price
          qty
          created_at
          
        }
      }`,
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
    })
  res.status(200).json(result)
}
