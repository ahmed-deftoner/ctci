package main

import (
	"log"
)

type Cat struct {
	Code int
}

type DBCat struct {
	Name string
	Code int
}

func main() {
	ch := make(chan Cat)
	var cats []DBCat

	go func() {

		for {
			select {
			case msg := <-ch:
				//go func(msg Cat) {
				cats[msg.Code-2].Code += 3
				//}(msg)
				log.Println(cats[msg.Code-2])
			default:
			}
		}
	}()

	for i := 0; i < 10; i++ {
		cats = append(cats, DBCat{Name: "meow", Code: i + 2})
		go func(t int) {
			ch <- Cat{
				Code: t + 2,
			}
		}(i)
	}

	select {}
}
