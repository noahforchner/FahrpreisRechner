package com.example.scooteq

import android.os.Binder
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.scooteq.databinding.LoadScreenFragmentBinding
import com.example.scooteq.databinding.MainScreenFragmentBinding

class FragmentMainScreen : Fragment() {
    private lateinit var binding: MainScreenFragmentBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = MainScreenFragmentBinding.inflate(inflater, container, false)
        val view: View = binding.root

        return view
    }
}