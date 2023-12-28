// src/context/context.go
func (c *cancelCtx) cancel(removeFromParent bool, err error) {
	// 必须要传 err
	if err == nil {
		panic("context: internal error: missing cancel error")
	}
	c.mu.Lock()
	if c.err != nil {
		c.mu.Unlock()
		return // 已经被其他协程取消
	}
	// 给 err 字段赋值
	c.err = err
	// 关闭 channel，通知其他协程
	if c.done == nil {
		// 相当于没有调 Done() 方法，所以不需要真正关闭 c.done，而且 c.done 是 nil
		c.done = closedchan
	} else {
		close(c.done)
	}

	// 遍历它的所有子节点
	for child := range c.children {
		// 递归地取消所有子节点
		child.cancel(false, err)
	}
	// 将子节点置空
	c.children = nil
	c.mu.Unlock()
	if removeFromParent {
		// 从父节点中移除自己
		removeChild(c.Context, c)
	}
}