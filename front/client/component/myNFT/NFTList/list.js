export const statusList = {
  'buy':[
    {name:'전체',code:'all'},
    {name:'배송지 미입력',code:'wait'},
    {name:'상품준비중',code:'ready'},
    {name:'배송중',code:'delivery'},
    {name:'구매완료',code:'completed'},
  ],
  'auction':[
    {name:'전체',code:'all'},
    {name:'입찰',code:'bid'},
    {name:'유찰',code:'burial'},
    {name:'낙찰',code:'success'},
  ],
  'immysell':[
    {name:'전체',code:'all'},
    {name:'판매중',code:'sale'},
    {name:'매진',code:'soldout'},
    {name:'판매중단',code:'stop'},
  ],
  'auctionsell':[
    {name:'전체',code:'all'},
    {name:'경매중',code:'true'},
    {name:'경매종료',code:'false'},
    {name:'배송지 미입력',code:'wait'},
    {name:'배송 요청',code:'ready'},
    {name:'배송중',code:'delivery'},
    {name:'구매완료',code:'completed'},
  ],
  'sell':[
    {name:'전체',code:'all'},
    {name:'판매중',code:'sale'},
    {name:'매진',code:'soldout'},
    {name:'경매중',code:'auction'},
    {name:'경매종료',code:'stop'},
  ]
}

export const sortList = {
  'buy':[
    {name:'최신 순',code:'new'},
    {name:'오래된 순',code:'old'},
    {name:'높은 가격 순',code:'high'},
    {name:'낮은 가격 순',code:'low'},
    {name:'좋아요 순',code:'like'},
  ],
  'auction':[
    {name:'최신 입찰 순',code:'new'},
    {name:'오래된 입찰 순',code:'old'},
    {name:'마감 임박 순',code:'dead'},
    {name:'높은 입찰가 순',code:'high'},
    {name:'낮은 입찰가 순',code:'low'},
    {name:'좋아요 순',code:'like'},
  ],
  'immysell':[
    {name:'최신 주문일 순',code:'new'},
    {name:'오래된 주문일 순',code:'old'},
    {name:'높은 가격 순',code:'high'},
    {name:'낮은 가격 순',code:'low'},
    {name:'좋아요 순',code:'like'},
  ],
  'auctionsell':[
    {name:'최신 주문일 순',code:'new'},
    {name:'오래된 주문일 순',code:'old'},
    {name:'마감 임박 순',code:'dead'},
    {name:'높은 입찰가 순',code:'high'},
    {name:'낮은 입찰가 순',code:'low'},
    {name:'좋아요 순',code:'like'},
  ],
  'sell':[
    {name:'최신 등록일 순',code:'new'},
    {name:'오래된 등록일 순',code:'old'},
    {name:'좋아요 순',code:'like'},
  ]
}

export const typeList = {
 'buy': '구매 내역',
 'auction':'경매 내역',
 'immysell':'즉시판매 내역',
 'auctionsell':'경매판매 내역',
 'sell':'판매 상품'

}


export const dlvyList = {
  'all':'전체',
  'wait':'배송지 미입력',
  'ready':'배송요청',
  'delivery':'배송중',
  'completed':'구매완료',
}