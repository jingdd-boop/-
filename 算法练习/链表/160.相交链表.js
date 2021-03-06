var getIntersectionNode = function(headA, headB) {
  //清除高度差
  //同时遍历两个链表
  //一直往下遍历，会发现，短链表会先遍历完，为null，然后短链表的指针指向长链表的头指针，
  //接着当，长链表遍历到最后指向null时，将长链表的指针指向短链表的头结点
  //继续遍历，如果有相交，则会出现重合返回pA，否则返回null
  let pA = headA;
  let pB = headB;
  while(pA || pB){
    if(pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
}




//9/18
var getIntersectionNode = function(headA, headB) {
  let pA = headA;
  let pB = headB;
  while(pA || pB){
    if(pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
}


//10/25
var getIntersectionNode = function(headA,headB) {
  if(!headA) return null;
  if(!headB) return null;

  let p1 = headA;
  let p2 = headB;
  while(p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }
  return p1;
}