<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Posts;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PostController extends Controller
{

    /** Add new post
     * @param  Request  $request
     * @return string
     */
    public function add(Request $request)
    {
        $post = new Posts();

        $post->title = $request->title;
        $post->description = $request->description;
        $post->author = $request->author;
        $post->save();

        return $post;
    }

    /** Update post
     * @param  Request  $request
     * @return string
     */
    public function update(Request $request)
    {
        $post = Posts::find($request->id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->author = $request->author;
        $post->save();

        return $post;

    }

    /** Получить пост
     * @param  int  $id
     * @return
     */
    public function getPost(int $id)
    {
        $post = Posts::find($id);
        return $post;
    }


    /** Получить пост
     * @return Posts[]|Collection
     */
    public function getPosts()
    {
        $posts = Posts::all();

        return $posts;
    }


    /** Удалить пост
     * @param  int  $id
     * @return bool
     */
    public function delete(int $id)
    {
        $post = Posts::find($id);

        if ($post->delete()) {
            return true;
        } else {
            return false;
        }
    }

}
