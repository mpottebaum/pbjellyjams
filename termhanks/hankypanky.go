package termhanks

type Choice struct {
	Text string `json:"text"`
	Next string `json:"next"`
}

type Panel struct {
	Art     string   `json:"art"`
	Text    string   `json:"text"`
	Choices []Choice `json:"choices"`
}

var Panels = map[string]Panel{
	"tester": {
		Art:  "something",
		Text: "this is the text yo what about it",
		Choices: []Choice{
			{
				Text: "sup yo",
				Next: "tester lester",
			},
			{
				Text: "oh no yo whoa bro",
				Next: "tester mester",
			},
		},
	},
	"tester lester": {
		Art:  "something else",
		Text: "this is tester lester the bester let it fester",
		Choices: []Choice{
			{
				Text: "ok bro what gives",
				Next: "tester mester",
			},
			{
				Text: "live and let live my man",
				Next: "tester",
			},
		},
	},
	"tester mester": {
		Art:  "something else entirely",
		Text: "and this is tester mester what could be better",
		Choices: []Choice{
			{
				Text: "yo yoy oy oy oya",
				Next: "tester lester",
			},
			{
				Text: "live and let live my man",
				Next: "tester",
			},
		},
	},
}
